# run_local.ps1
# Starts a local static server using Python and opens the default browser.
# Requirements: Python 3 installed and in PATH.

$port = 8000
$pidFile = "$env:TEMP\blacktechsec_server_pid.txt"

# Start python http.server in background
$startInfo = New-Object System.Diagnostics.ProcessStartInfo
$startInfo.FileName = "python"
$startInfo.Arguments = "-m http.server $port"
$startInfo.WorkingDirectory = (Get-Location).Path
$startInfo.CreateNoWindow = $true
$startInfo.UseShellExecute = $false

$p = [System.Diagnostics.Process]::Start($startInfo)
$p.Id | Out-File $pidFile -Force
Write-Host "Started HTTP server on http://localhost:$port (PID: $($p.Id))"
Start-Process "http://localhost:$port"

Write-Host "To stop the server, run:`nStop-Process -Id (Get-Content $pidFile) ; Remove-Item $pidFile -ErrorAction SilentlyContinue"