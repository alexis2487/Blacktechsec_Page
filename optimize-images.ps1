# optimize-images.ps1
# Script to create optimized/resized copies of img/profile.jpg
# Requires ImageMagick 'magick' on PATH (https://imagemagick.org)
# Usage: Right-click -> Run with PowerShell, or run from terminal:
#   .\optimize-images.ps1

$src = "img/profile.jpg"
$dst480 = "img/profile-480.jpg"
$dst800 = "img/profile-800.jpg"

if (-not (Test-Path $src)) {
    Write-Error "Source image $src not found. Place your profile image at $src and re-run."
    exit 1
}

# Check for ImageMagick
$magick = Get-Command magick -ErrorAction SilentlyContinue
if ($null -eq $magick) {
    Write-Warning "ImageMagick 'magick' not found. Install ImageMagick or run manual optimization. See https://imagemagick.org"
    exit 1
}

Write-Host "Optimizing $src -> $dst800 (800px)"
magick convert `"$src`" -strip -interlace Plane -quality 82 -resize 800x800^> `"$dst800`"

Write-Host "Optimizing $src -> $dst480 (480px)"
magick convert `"$src`" -strip -interlace Plane -quality 78 -resize 480x480^> `"$dst480`"

Write-Host "Done. Created: $dst800, $dst480"

# Also generate WebP versions for better compression
$dst800webp = "img/profile-800.webp"
$dst480webp = "img/profile-480.webp"

Write-Host "Optimizing $src -> $dst800webp (800px, webp)"
magick convert `"$src`" -strip -interlace Plane -quality 80 -resize 800x800^> `"$dst800webp`"

Write-Host "Optimizing $src -> $dst480webp (480px, webp)"
magick convert `"$src`" -strip -interlace Plane -quality 76 -resize 480x480^> `"$dst480webp`"

Write-Host "Done. Created: $dst800, $dst480, $dst800webp, $dst480webp"
*** End Patch