(() => {
document.querySelector('#leboncoin-stats')?.remove()
let obj = {}
let prices = [...document.querySelectorAll('[data-test-id="Price"]')].map(n => Number(n.innerText.replace(/\s€/, ''))).filter(Boolean)
obj.median = prices[Math.round((prices.length) / 2) - 1]
obj.mean = prices.reduce((a, b) => a + b, 0) / prices.length
obj.min = prices[0]
obj.max = prices.at(-1)
let node = document.createElement('span')
node.setAttribute("id", "leboncoin-stats");
node.textContent = JSON.stringify(obj)
document.querySelector('[data-test-id="home-logo"]').append(node)
})()
