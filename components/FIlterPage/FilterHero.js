function FilterHero({cat}) {
    return ( 
        <section style={{backgroundImage:`url(${require('../../images/backgrounds/banner-1.webp')})`}} id="banner">
        <div className="container">
            <h1>{cat}</h1>
        </div> 
    </section>
     );
}

export default FilterHero; 