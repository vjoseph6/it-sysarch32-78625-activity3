
function Pokemon({ studentImage, studentName, studentAlias, id, btn1, btn2, hp, attk, def, title, description}) {
    return (
        <div className="student">
           
            <h2>{title}</h2>
            <p>{description}</p>
            <img className="student-image" src={studentImage} alt="profile picture" />
            <h2 className="student-name">
                {id} {studentName}
            </h2>
            <div className="btn-container">
                <button className="btn1">{btn1}</button>
                <div className="space"></div> {/* Add space */}
                <button className="btn2">{btn2}</button>    
            </div>
            <p className="Health">HP: {hp}</p>
            <p className="attack">Attk: {attk}</p>
            <p className="defense">Def: {def}</p>
            <p className="student-alias">{studentAlias}</p>
            
        </div>
    );
    
    
}

export default Pokemon;
