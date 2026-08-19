import './ActorCard.css';

export const ActorCard = props => (
   <div className="actor-card">
    <div className='pic'>
        <img src={props.actor.image} alt={props.actor.name} />
        </div>
    <div>
        <h2>{props.actor.name}</h2>
        <p>{props.actor.biography}</p>
    </div>

   </div>
);