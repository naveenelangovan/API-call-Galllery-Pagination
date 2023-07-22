function Weather(props) {
    console.log(props);
    const { location = 'Rajasthan', climate = 'hot' } = props;
    let url = '';
    if (climate === 'hot') {
        url = 'https://www.newhomesource.com/learn/wp-content/uploads/2020/01/hot-climate.jpg';
    } else if (climate === 'cold') {
        url = 'https://static01.nyt.com/images/2018/01/04/climate/04CLI-CLIMATESTORM1/merlin_131835533_f9159ffe-62f3-4f2e-9b36-5382970017f5-superJumbo.jpg';
    } else if (climate === 'rainy') {
        url = 'https://i.guim.co.uk/img/static/sys-images/Environment/Pix/columnists/2011/12/1/1322752055932/FAQ-on-what-does-climate--006.jpg?width=465&quality=85&dpr=1&s=none'
    } else if (climate === 'snow') {
        url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/CargoNet_Di_12_Euro_4000_L%C3%B8nsdal_-_Bolna.jpg/800px-CargoNet_Di_12_Euro_4000_L%C3%B8nsdal_-_Bolna.jpg';
    }

    return (
        <>
            <h2>Weather</h2>
            <p>Location: {location}</p>
            <p>Climate: {climate}</p>
            <img src={url} alt={props.climate} title={props.climate} width={400} height={350} />
        </>
    )
}

export default Weather;