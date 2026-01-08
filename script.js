* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    color: #333;
    overflow-x: hidden;
}

.sidebar {
    position: fixed; left: 0; top: 0; width: 280px; height: 100vh;
    background: rgba(255,255,255,0.95); backdrop-filter: blur(20px);
    padding: 2rem 1.5rem; box-shadow: 2px 0 40px rgba(0,0,0,0.1);
    z-index: 1000;
}
.logo h2 { color: #667eea; margin-bottom: 0.5rem; }
.logo p { color: #764ba2; font-size: 0.9rem; }
.nav-item {
    display: flex; align-items: center; gap: 1rem; padding: 1rem;
    margin: 0.5rem 0; color: #555; text-decoration: none;
    border-radius: 15px; transition: all 0.3s; font-weight: 500;
}
.nav-item:hover, .nav-item.active { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }

main { margin-left: 300px; padding: 2rem; min-height: 100vh; }
.section { display: none; }
.section.active { display: block; }

.status-bar { display: flex; gap: 1.5rem; margin-bottom: 2rem; }
.status-card {
    flex: 1; background: rgba(255,255,255,0.9); padding: 1.5rem;
    border-radius: 20px; text-align: center; box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}
.status-card.connected span:last-child { color: #4CAF50; font-weight: bold; }

.input-panel { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem; }
.rodent-card, .input-card { 
    background: rgba(255,255,255,0.9); padding: 1.5rem; border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}
input, select, button {
    width: 100%; padding: 0.75rem; margin: 0.5rem 0; border: none;
    border-radius: 12px; background: rgba(255,255,255,0.8); font-size: 1rem;
}

.metrics-display {
    display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1rem;
    background: linear-gradient(45deg, #ffd700, #ffed4e, #ff6b6b);
    padding: 2rem; border-radius: 25px; text-align: center; margin: 2rem 0;
    box-shadow: 0 25px 50px rgba(255,215,0,0.4);
}
.metric { font-size: 1.2rem; }
.metric div { font-size: 2rem; font-weight: bold; margin-top: 0.5rem; }
.condition { border-radius: 50px; padding: 1rem; font-size: 1.8rem !important; }

.drug-panel {
    background: rgba(255,255,255,0.9); padding: 2rem; border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}
.dose-display { font-size: 1.2rem; font-weight: bold; color: #4CAF50; margin: 1rem 0; }
.btn-primary {
    background: linear-gradient(135deg, #667eea, #764ba2); color: white;
    border: none; padding: 1rem 2rem; border-radius: 12px; font-size: 1.1rem;
    cursor: pointer; transition: transform 0.2s;
}
.btn-primary:hover { transform: translateY(-2px); }

.table-container { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
table { width: 100%; border-collapse: collapse; }
th { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1.2rem; }
td { padding: 1rem; border-bottom: 1px solid #eee; }

.charts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; }
.chart-container {
    background: rgba(255,255,255,0.95); padding: 1.5rem; border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}
.chart-container h3 { text-align: center; margin-bottom: 1rem; color: #667eea; }

.alerts-grid { display: grid; gap: 1rem; }
.alert-card {
    background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white;
    padding: 1.5rem; border-radius: 15px; box-shadow: 0 10px 30px rgba(255,107,107,0.4);
}

.guidelines-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0; }
.guideline-card {
    background: rgba(255,255,255,0.9); padding: 2rem; border-radius: 20px;
    text-decoration: none; color: #333; text-align: center; transition: all 0.3s;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}
.guideline-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.2); }

@media (max-width: 768px) {
    .sidebar { width: 100%; height: auto; position: relative; }
    main { margin-left: 0; }
    .input-panel { grid-template-columns: 1fr; }
    .metrics-display { grid-template-columns: 1fr; }
}
