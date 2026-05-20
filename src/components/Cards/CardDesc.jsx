import cardStyles from './Card.module.css';
const CardDesc = () => {
    return (
        <div className={cardStyles.card} style={{ width: "100%" }}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam fuga, harum delectus dignissimos similique atque et error tenetur, velit nisi minima quasi aliquam aspernatur qui, suscipit cupiditate distinctio voluptates?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio debitis praesentium vel sit vitae, repudiandae dicta minima eos nisi cupiditate pariatur eum, sint in quas maxime, numquam quod dolor. Quia.</p>
        </div>
    );
}

export default CardDesc;