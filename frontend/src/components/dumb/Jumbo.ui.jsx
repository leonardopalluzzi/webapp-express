export default function JumboUi({ image, title, content }) {
    return (
        <>
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col">
                        <img src={`http://localhost:3000/${image}`} alt="" />
                    </div>
                    <div className="col">
                        <h2>{title}</h2>
                        <span>{content}</span>
                    </div>
                </div>
            </div>
        </>
    )
}