export default {
    title: "Room",
    name: "room",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Description",
            name: "description",
            type: "string"
        },
        {
            title: "Actions",
            name: "actions",
            type: "array",
            of: [{type: "action"}]
        },
        {
            title: "Items",
            name: "items",
            type: "array",
            of: [{type: "item"}]
        },
        {
            title: "Rooms",
            name: "rooms",
            type: "array",
            of: [{type: "room"}]
        }
    ]
}