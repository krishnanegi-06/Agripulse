// ============================================================
// script.js — Frontend Logic
// Connects to Java Spring Boot backend at localhost:8080
// ============================================================

// Backend URL — change this if deployed
const BACKEND_URL = "http://localhost:8080/api";

// ============================================================
// STATE
// ============================================================
let state = {
  imageLoaded: false,
  imageFile:   null,
  history:     [],
  statsAnalyzed:   0,
  statsWaterSaved: 0,
};

// ============================================================
// DOM REFERENCES
// ============================================================
const $ = (id) => document.getElementById(id);

const uploadZone      = $("uploadZone");
const uploadTrigger   = $("uploadTrigger");
const imageInput      = $("imageInput");
const imagePreview    = $("imagePreview");
const soilCanvas      = $("soilCanvas");
const removeImage     = $("removeImage");
const brightnessReadout = $("brightnessReadout");
const brightnessValue   = $("brightnessValue");

const cropSelect      = $("cropSelect");
const fieldArea       = $("fieldArea");
const cityInput       = $("cityInput");
const soilChips       = $("soilChips");
const analyzeBtn      = $("analyzeBtn");

const weatherLiveBox  = $("weatherLiveBox");
const liveWeatherIcon = $("liveWeatherIcon");
const liveTemp        = $("liveTemp");
const liveDesc        = $("liveDesc");
const liveHumidity    = $("liveHumidity");
const liveRainfall    = $("liveRainfall");

const resultsEmpty       = $("resultsEmpty");
const resultsData        = $("resultsData");
const gaugeFill          = $("gaugeFill");
const moistureVal        = $("moistureVal");
const moistureStatus     = $("moistureStatus");
const idealRange         = $("idealRange");
const waterRequired      = $("waterRequired");
const irrigationSchedule = $("irrigationSchedule");
const recommendationText = $("recommendationText");
const sendToCloudBtn     = $("sendToCloudBtn");

const historyBody   = $("historyBody");
const toast         = $("toast");
const toastMsg      = $("toastMsg");
const toastIcon     = $("toastIcon");
const heroMoisture  = $("heroMoisture");
const avgMoistureDash = $("avgMoisture");
const statAnalyzed  = $("statAnalyzed");
const statWater     = $("statWater");
const weatherTemp   = $("weatherTemp");
const weatherDesc   = $("weatherDesc");
const weatherTags   = $("weatherTags");
const rainfallFactor = $("rainfallFactor");

// ============================================================
// INIT — runs when page loads
// ============================================================
document.addEventListener("DOMContentLoaded", () => {

  // Populate crop dropdown from CROPS object in crop.js
  const cropSelectEl = $("cropSelect");

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "— Choose a crop —";
  cropSelectEl.appendChild(placeholder);

  for (let key in WORLD_CROPS) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = WORLD_CROPS[key];
    cropSelectEl.appendChild(option);
  }

  // Auto-update crop count stat
  $("statCropCount").textContent = Object.keys(WORLD_CROPS).length;

  initBarChart();

  // Check backend connection on load
  checkBackendConnection();
});

// ============================================================
// CHECK BACKEND CONNECTION
// ============================================================
async function checkBackendConnection() {
  try {
    const res = await fetch(`${BACKEND_URL}/health`, {
      method: "GET",
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) {
      document.querySelector(".status-dot").style.background = "#7ec850";
      document.querySelector(".status-dot").style.boxShadow = "0 0 10px #7ec850";
    }
  } catch {
    // Backend not running — show warning dot
    document.querySelector(".status-dot").style.background = "#e05555";
    document.querySelector(".status-dot").style.boxShadow = "0 0 10px #e05555";
  }
}

// ============================================================
// IMAGE UPLOAD
// ============================================================

uploadZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadZone.classList.add("drag-over");
});

uploadZone.addEventListener("dragleave", () => {
  uploadZone.classList.remove("drag-over");
});

uploadZone.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadZone.classList.remove("drag-over");
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) loadImagePreview(file);
});

uploadTrigger.addEventListener("click", () => imageInput.click());
uploadZone.addEventListener("click",    () => imageInput.click());

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) loadImagePreview(file);
});

removeImage.addEventListener("click", () => {
  imageInput.value    = "";
  state.imageLoaded   = false;
  state.imageFile     = null;
  imagePreview.classList.add("hidden");
  brightnessReadout.classList.add("hidden");
  uploadZone.classList.remove("hidden");
});

/**
 * loadImagePreview — shows image preview in canvas
 * NOTE: brightness calculation now done in Java backend
 * This just shows the image to the user
 */
function loadImagePreview(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const ctx = soilCanvas.getContext("2d");
      soilCanvas.width  = img.width;
      soilCanvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Save file for sending to backend
      state.imageFile   = file;
      state.imageLoaded = true;

      uploadZone.classList.add("hidden");
      imagePreview.classList.remove("hidden");
      brightnessReadout.classList.remove("hidden");
      brightnessValue.textContent = "Will be calculated by server";

      showToast("📷", "Image loaded — ready to analyze!");

      // Auto-trigger if crop already selected
      if (cropSelect.value) {
        runAnalysis();
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ============================================================
// SOIL CHIPS
// ============================================================
soilChips.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    soilChips.querySelectorAll(".chip")
             .forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
  });
});

// ============================================================
// MAIN ANALYSIS — sends everything to Java backend
// ============================================================
analyzeBtn.addEventListener("click", runAnalysis);

async function runAnalysis() {
  const cropKey  = cropSelect.value;
  const area     = parseFloat(fieldArea.value);
  const city     = cityInput ? cityInput.value.trim() : "Delhi";
  const soilType = soilChips.querySelector(".chip.active").dataset.soil;

  // Validation
  if (!cropKey)             return showToast("⚠️", "Please select a crop type.");
  if (!area || area <= 0)   return showToast("⚠️", "Please enter a valid field area.");
  if (!city)                return showToast("⚠️", "Please enter your city for live weather.");
  if (!state.imageLoaded)   return showToast("⚠️", "Please upload a soil image.");

  const cropData = CROPS[cropKey];

  // Build FormData to send to Java backend
  const formData = new FormData();
  formData.append("image",    state.imageFile);       // Member 1 uses this
  formData.append("cropName", cropData.name);          // crop display name
  formData.append("cropKey",  cropKey);                // crop key e.g. "wheat"
  formData.append("idealMin", cropData.idealMin);      // Member 3 uses this
  formData.append("idealMax", cropData.idealMax);      // Member 3 uses this
  formData.append("kc",       cropData.kc);            // Member 3 uses this
  formData.append("area",     area);                   // Member 3 uses this
  formData.append("soilType", soilType);               // Member 1 + 3 use this
  formData.append("city",     city);                   // Member 2 uses this

  // Show loading state
  setAnalyzing(true);
  showToast("⏳", "Analyzing soil image and fetching live weather...");

  try {

    // ── Send to Java backend ─────────────────────────────────
    const response = await fetch(`${BACKEND_URL}/analyze`, {
      method: "POST",
      body:   formData,
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Server error " + response.status);
    }

    // ── Receive result from Java backend ─────────────────────
    const result = await response.json();

    /*
      result contains:
      {
        avgBrightness,        ← from Member 1 (ImageProcessingService)
        moisturePercent,      ← from Member 1
        temperature,          ← from Member 2 (WeatherService)
        humidity,             ← from Member 2
        rainfallProbability,  ← from Member 2
        weatherDescription,   ← from Member 2
        weatherIcon,          ← from Member 2
        waterRequiredLitres,  ← from Member 3 (WaterCalculationService)
        moistureStatus,       ← from Member 3
        irrigationSchedule,   ← from Member 3
        recommendation,       ← from Member 3
        idealRange            ← from Member 3
      }
    */

    // ── Update brightness readout (from Java) ────────────────
    brightnessValue.textContent = result.avgBrightness.toFixed(1);

    // ── Update live weather box ──────────────────────────────
    updateLiveWeatherBox(result);

    // ── Update main weather section ──────────────────────────
    updateWeatherSection(result);

    // ── Display analysis results ─────────────────────────────
    displayResults(result, cropData);

    // ── Update hero moisture ring ────────────────────────────
    heroMoisture.textContent = `${Math.round(result.moisturePercent)}%`;
    avgMoistureDash.textContent = `${result.moisturePercent.toFixed(1)}%`;

    // ── Update dashboard temp ────────────────────────────────
    $("soilTemp").textContent = `${result.temperature.toFixed(1)}°C`;

    // ── Update counters ──────────────────────────────────────
    state.statsAnalyzed++;
    state.statsWaterSaved += result.waterRequiredLitres || 0;
    statAnalyzed.textContent = state.statsAnalyzed;
    statWater.textContent = `${(state.statsWaterSaved / 1000).toFixed(1)}kL`;

    showToast("✅", "Analysis complete! Data received from server.");

  } catch (err) {
    console.error("Analysis error:", err);
    showToast("❌", "Error: " + err.message +
              ". Make sure Java backend is running on port 8080.");
  } finally {
    setAnalyzing(false);
  }
}

// ============================================================
// LOADING STATE
// ============================================================
function setAnalyzing(loading) {
  analyzeBtn.disabled = loading;
  analyzeBtn.classList.toggle("loading", loading);
  analyzeBtn.querySelector(".btn-text").textContent =
    loading ? "Analyzing..." : "Run Analysis";

  if (loading) {
    analyzeBtn.querySelector(".btn-arrow").innerHTML =
      '<span class="spinner"></span>';
  } else {
    analyzeBtn.querySelector(".btn-arrow").textContent = "→";
  }
}

// ============================================================
// UPDATE LIVE WEATHER BOX
// Shows weather data from Member 2 (Java WeatherService)
// ============================================================
function updateLiveWeatherBox(result) {
  weatherLiveBox.classList.remove("hidden");
  weatherLiveBox.classList.add("visible");

  const iconMap = {
    "Clear":        "☀️",
    "Clouds":       "⛅",
    "Rain":         "🌧️",
    "Drizzle":      "🌦️",
    "Thunderstorm": "⛈️",
    "Snow":         "❄️",
    "Mist":         "🌫️",
    "Fog":          "🌁",
    "Haze":         "🌫️",
  };

  liveWeatherIcon.textContent  = iconMap[result.weatherIcon] || "⛅";
  liveTemp.textContent         = `${result.temperature.toFixed(1)}°C`;
  liveDesc.textContent         = result.weatherDescription;
  liveHumidity.textContent     = result.humidity.toFixed(0);
  liveRainfall.textContent     = result.rainfallProbability.toFixed(0);
}

// ============================================================
// UPDATE MAIN WEATHER SECTION
// ============================================================
function updateWeatherSection(result) {
  const iconMap = {
    "Clear":        "☀️",
    "Clouds":       "⛅",
    "Rain":         "🌧️",
    "Drizzle":      "🌦️",
    "Thunderstorm": "⛈️",
    "Snow":         "❄️",
    "Mist":         "🌫️",
  };

  document.querySelector(".weather-icon-big").textContent =
    iconMap[result.weatherIcon] || "⛅";
  weatherTemp.textContent = `${result.temperature.toFixed(1)}°C`;
  weatherDesc.textContent = result.weatherDescription;

  // Rainfall factor bar
  const rainfallPct = result.rainfallProbability;
  rainfallFactor.textContent = `${rainfallPct.toFixed(0)}%`;
  const rainFill = document.querySelector(".factor-fill.rain");
  if (rainFill) rainFill.style.width = `${rainfallPct}%`;

  // Weather tags based on temp from server
  const temp = result.temperature;
  let tags = [];
  if      (temp < 15) tags = ["Low ET", "Reduce Irrigation", "Frost Watch"];
  else if (temp < 25) tags = ["Moderate ET", "Efficient Conditions"];
  else if (temp < 35) tags = ["High ET", "Morning Irrigation Advised"];
  else                tags = ["Critical ET", "Irrigate Before 8AM"];

  if (rainfallPct > 50) tags.push("🌧 Rain Expected");
  if (result.humidity > 80) tags.push("High Humidity");

  weatherTags.innerHTML = tags
    .map(t => `<span class="weather-tag">${t}</span>`)
    .join("");
}

// ============================================================
// DISPLAY RESULTS
// Uses data returned from Java backend
// ============================================================
function displayResults(result, cropData) {
  resultsEmpty.classList.add("hidden");
  resultsData.classList.remove("hidden");

  const moisture    = result.moisturePercent;
  const waterLitres = result.waterRequiredLitres;

  // ── Gauge animation ──────────────────────────────────────
  const circumference = 251.2;
  const fraction      = Math.min(moisture / 100, 1);
  gaugeFill.style.strokeDashoffset =
    circumference - fraction * circumference;

  // Gauge color based on moisture vs ideal
  if      (moisture < cropData.idealMin - 15) gaugeFill.style.stroke = "#e05555";
  else if (moisture < cropData.idealMin)       gaugeFill.style.stroke = "#f5a623";
  else if (moisture <= cropData.idealMax)      gaugeFill.style.stroke = "#7ec850";
  else                                         gaugeFill.style.stroke = "#4a90d9";

  // Animated counter for moisture value
  animateCounter(moistureVal, 0, moisture, 1200);

  // ── Status badge ─────────────────────────────────────────
  const statusMap = {
    "Critically Dry":  "status-critical",
    "Below Optimal":   "status-low",
    "Optimal":         "status-ok",
    "Over-saturated":  "status-high",
  };

  const statusClass = statusMap[result.moistureStatus] || "status-ok";
  moistureStatus.className   = `rs-value status-badge ${statusClass}`;
  moistureStatus.textContent = result.moistureStatus;

  // ── Stats ─────────────────────────────────────────────────
  idealRange.textContent =
    result.idealRange || `${cropData.idealMin}% – ${cropData.idealMax}%`;

  waterRequired.textContent =
    waterLitres > 0
      ? `${Math.round(waterLitres).toLocaleString()} L`
      : "None required";

  irrigationSchedule.textContent = result.irrigationSchedule;
  recommendationText.textContent = result.recommendation;

  // ── Add to history ────────────────────────────────────────
  addToHistory(moisture, waterLitres, cropData, statusClass,
               result.moistureStatus, result.temperature,
               result.rainfallProbability);
}

// ============================================================
// HISTORY LOG
// ============================================================
function addToHistory(moisture, water, crop, statusClass,
                      statusLabel, temp, rainfall) {
  const record = {
    id:          state.history.length + 1,
    timestamp:   new Date().toLocaleString(),
    crop:        crop.name,
    moisture,
    water,
    temp,
    rainfall,
    statusClass,
    statusLabel,
  };

  state.history.unshift(record);
  renderHistory();
}

function renderHistory() {
  if (state.history.length === 0) {
    historyBody.innerHTML =
      `<tr class="empty-row">
         <td colspan="7">No records yet. Run your first analysis above.</td>
       </tr>`;
    return;
  }

  historyBody.innerHTML = state.history.map(r => `
    <tr>
      <td style="font-family:var(--font-mono);color:var(--text-muted)">#${r.id}</td>
      <td>${r.timestamp}</td>
      <td style="color:var(--accent-lime)">${r.crop}</td>
      <td style="font-family:var(--font-mono)">${r.moisture.toFixed(1)}%</td>
      <td style="font-family:var(--font-mono);color:var(--accent-teal)">
        ${r.water > 0 ? Math.round(r.water).toLocaleString() + " L" : "None"}
      </td>
      <td><span class="status-badge ${r.statusClass}">${r.statusLabel}</span></td>
      <td><button class="btn-view" onclick="viewRecord(${r.id - 1})">View</button></td>
    </tr>
  `).join("");
}

window.viewRecord = function(index) {
  const r = state.history[index];
  showToast("📋",
    `#${r.id}: ${r.crop} — ${r.moisture.toFixed(1)}% moisture, ` +
    `${Math.round(r.water).toLocaleString()}L needed, ` +
    `${r.temp?.toFixed(1)}°C, ${r.rainfall?.toFixed(0)}% rain`);
};

// ============================================================
// CLOUD SEND BUTTON
// Calls Member 4's Java endpoint
// ============================================================
sendToCloudBtn.addEventListener("click", async () => {
  sendToCloudBtn.disabled = true;
  sendToCloudBtn.innerHTML = `<span>⏳</span> Syncing to cloud...`;

  try {
    const res = await fetch(`${BACKEND_URL}/dashboard`);
    if (res.ok) {
      showToast("📡", "Data confirmed in cloud server!");
    }
  } catch {
    showToast("📡", "Cloud sync simulated successfully!");
  } finally {
    sendToCloudBtn.disabled = false;
    sendToCloudBtn.innerHTML = `<span>📡</span> Send to Cloud Server`;
    avgMoistureDash.textContent = heroMoisture.textContent;
  }
});

// ============================================================
// BAR CHART
// ============================================================
function initBarChart() {
  const barChart  = $("barChart");
  const chartDays = $("chartDays");

  const days   = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const values = [58, 63, 61, 55, 67, 72, 68];

  barChart.innerHTML  = "";
  chartDays.innerHTML = "";

  const maxVal = Math.max(...values);

  values.forEach((val, i) => {
    const pct  = (val / maxVal) * 100;
    const wrap = document.createElement("div");
    wrap.className = "bar-wrap";
    const bar = document.createElement("div");
    bar.className    = "bar";
    bar.dataset.val  = `${val}%`;
    bar.style.height = "0px";
    wrap.appendChild(bar);
    barChart.appendChild(wrap);
    setTimeout(() => { bar.style.height = `${pct * 1.4}px`; }, i * 80);
  });

  days.forEach(day => {
    const span = document.createElement("span");
    span.className   = "chart-day";
    span.textContent = day;
    chartDays.appendChild(span);
  });
}

// ============================================================
// ANIMATED COUNTER
// ============================================================
function animateCounter(el, from, to, duration) {
  const start = performance.now();
  const step  = (now) => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    el.textContent = (from + (to - from) * ease).toFixed(1);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ============================================================
// TOAST
// ============================================================
let toastTimer;
function showToast(icon, msg) {
  toastIcon.textContent = icon;
  toastMsg.textContent  = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 4000);
}

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href"))
            ?.scrollIntoView({ behavior: "smooth" });
  });
});

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".card, .dash-card, .weather-main, .weather-factors")
  .forEach(el => {
    el.style.opacity    = "0";
    el.style.transform  = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });