import type { User } from "../types/user";

export const ListItem = (props: User) => {
    const { id, name, age, personalColor } = props;
    return (
        <p style={{ color: personalColor }}>
            {id}: {name} ({age})
        </p>
    )
}