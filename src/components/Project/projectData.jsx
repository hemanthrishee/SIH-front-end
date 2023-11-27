const projectData = ({projects}) => {
    return (
        <>
            {
                projects.map((curProject , i) => {
                    const {id, name, university} = curProject;
                    return (
                        <tr key={id}>
                            <td>{i+1}</td>
                            <td>{name}</td>
                            <td>{university}</td>
                            <td>Have to add think about what to add</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default projectData;