<>
    {/* HOME PAGE TEMPLATE */}

    <div className={styles.headline}>
        <h1>Dept Tracker</h1>
        <p>Track your departments and students</p>
        <a href="/departments/add" className={styles.addBtn}>Add New Department</a>
    </div>
    <div className={styles.cards}>
        <div className={styles.departmentCard}>
            <div className={styles.cardHeader}>
                <h2>DEPARTMENT NAME GOES HERE</h2>
                <hr />
                <p>LOCATION GOES HERE</p>
                <div className={styles.actionBtns}>
                    <a href="">View Students</a>
                    <a href="">
                        <button className={styles.deleteBtn}>Update</button>
                    </a>
                </div>
            </div>
        </div>
    </div>


    {/* ADD FORM TEMPLATE */}
    // Update FORM
    <form className={styles.form}>
        <h2>Department Information</h2>
        <div className={styles.formGroup}>
            <label htmlFor="name">Department Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter department name" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter location" className={styles.input} required />
        </div>
        <button type="submit" className={styles.submitBtn}>Update</button>
    </form>
    
    {/*  Students Table */}
    <>
        <h1>Students of </h1>
        <hr />
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Major</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </>
</>




