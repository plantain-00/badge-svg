/**
 * @public
 */
export default function generateBadgeSvg(name: string, value: string) {
  const padding = 6
  const nameWidth = 6 * name.length + padding * 2
  const valueWidth = 7 * value.length + padding * 2
  const width = nameWidth + valueWidth
  return `<svg contentScriptType="text/ecmascript" width="${width}"
    xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"
    contentStyleType="text/css" height="20" preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg" version="1.0">
    <rect rx="3" fill="#555" width="${width}" height="20"/>
    <rect rx="3" fill="#4c1" width="${valueWidth}" x="${nameWidth}" height="20"/>
    <g font-size="11" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" fill="#fff">
      <text x="${padding}" y="14">${name}</text>
      <text x="${nameWidth + padding}" y="14">${value}</text>
    </g>
</svg>`
}
// 11 * x = 75
