
import Badge from './components/Badge'
import Card from './components/Card'

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <h2>Daftar Produk</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: '1rem' }}>
        <Card 
          title = "Kemeja Polos" 
          harga="120.000" 
          linkImg="https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/86b6f0a5fa2daf8c1292f8857e6905e3e18e8904_xxl-1.jpg" 
          altImg="kemeja polos">
          <Badge label = "Baru" color='green' />
        </Card>

        <Card title = "Sepatu Sneakers" 
          harga="450.000" 
          linkImg="https://dynamic.zacdn.com/keYhMFRx7BXieP_zPbjhpa-oL-4=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/call-it-spring-8475-6840274-1.jpg" 
          altImg="Sepatu Sneakers">
          <Badge label = "Promo" color='orange' />
        </Card>
        
        <Card title = "Tas Ransel" 
          harga="280.000" 
          linkImg="https://fjallraven.co.id/cdn/shop/files/skule_28_23346-243_a_main_fjr_1fea7769-1266-453c-8cda-678ac2d3e03b.jpg?v=1755566982" 
          altImg="Tas Ransel">
          <Badge label = "Limited" color='red' />
        </Card>
      </div>
    </div>
  )
}

export default App
