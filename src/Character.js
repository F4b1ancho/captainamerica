import logo from './logo.svg';
import './Character.css';

function Character({name,}) {
  return (
    <div className="container">
<h1>{name}</h1>
<div className='image-character'>
<span className='name '>Scarlet Witch</span> 
    <img className='imgdd'src='https://dam.smashmexico.com.mx/wp-content/uploads/2020/11/Avengers-Bruja-Escarlata-Scarlet-Witch-Historia-de-Marvel-poster.jpg'></img>
    
</div>
    </div>
  );
}

export default Character;