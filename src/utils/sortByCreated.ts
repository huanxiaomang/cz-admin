export const toTimestamp = (time: string) => {
    const date = new Date(time);
    return date.getTime();
}

export const sortByCreated = (list: {
    stack: string;
    content: string;
    updatedAt: string;
    id: number;
    title: string;
    members: string;
    createdAt: string;
}[]) => {
    return list.toSorted((a, b) => toTimestamp(b.createdAt) - toTimestamp(a.createdAt));
}