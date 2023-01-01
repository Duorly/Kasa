export const Banner = ({title, bg}) => {
    return (
        <div className="banner" style={{backgroundImage: `url(${bg})`}}>
            <div>
                <span>{title}</span></div>
        </div>
    );
}