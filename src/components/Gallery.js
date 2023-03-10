
import datas from '../datas/appartList'
import Card from './Card';
import '../styles/Gallery.css'

const Gallery = () => {
    
 
 return (
<main className='gallery-container'>
    <div className='gallery'>
        {datas.map((data) =>(
            <Card key={data.id} id={data.id} title={data.title} cover={data.cover} /> 
        ) )}
    </div>

 </main>
      
    );
};

export default Gallery;