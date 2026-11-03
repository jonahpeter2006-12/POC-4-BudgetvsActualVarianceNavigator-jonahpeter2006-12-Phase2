# Selenium E2E execution

## Prerequisites
- Python 3.10+
- Google Chrome installed
- Internet access to the deployed Render services

Selenium 4.6+ uses Selenium Manager to resolve the matching ChromeDriver in most
setups; no separate driver download is normally needed.

## Install
```powershell
py -m pip install -r requirements-selenium.txt
```

## Run against deployed services (no localhost)
```powershell
$env:FRONTEND_URL="https://poc4-budget-frontend.onrender.com"
$env:BACKEND_URL="https://poc4-budget-backend.onrender.com"
py tests/test_live_application.py
```

Optional headless run:
```powershell
$env:HEADLESS="true"
py tests/test_live_application.py
```

Optional expected signature override:
```powershell
$env:EXPECTED_NAME="Jonah Peter"
```

## Generated evidence
- `Test_Report.txt` — readable pass/fail report
- `test-results/results.json` — machine-readable result
- `screenshots/selenium-live-dashboard.png` — desktop screenshot
- `screenshots/selenium-failure.png` — captured if an exception occurs

The process exits `0` only if every recorded test passes; otherwise it exits `1`.
