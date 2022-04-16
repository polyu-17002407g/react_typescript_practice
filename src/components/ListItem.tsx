type User = {
    id: number;
    name: string;
    age: number;
    personsalColor: string;
  };

export const ListItem = (props: User) => {
    const { id, name, age, personsalColor } = props;
    return (
        <p style={{ color: personsalColor }}>
            {id}: {name} ({age})
        </p>
    )
}