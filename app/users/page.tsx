const UsersPage = async () => {
    const res = await fetch(`http://localhost:5000/users`);
    const users = await res.json();

    return (
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    );
};

export default UsersPage;