
import Badge from './components/Badge'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1>Latihan Reusable Component - Card dan Button</h1>
      <Card title = "Produk 1" harga="120.000" linkImg="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/86b6f0a5fa2daf8c1292f8857e6905e3e18e8904_xxl-1.jpg" altImg="kemeja polos">
        <Badge label = "Baru" color='green' />
      </Card>
    </>
  )
}

export default App
