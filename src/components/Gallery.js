
import datas from '../datas/appartList'
import Card from './Card';
import '../styles/Gallery.css'

const Gallery = () => {
    const list = datas
 
 return (
<main>
    <div className='gallery'>
        {list.map((data) =>(
            <Card key={data.id} data={data} /> 
        ) )}
    </div>

 </main>
      
    );
};

export default Gallery;