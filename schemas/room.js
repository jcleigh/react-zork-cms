export default {
    title: "Room",
    name: "room",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string"
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
            of: [{
                type: "reference",
                to: [{type: "action"}]
            }]
        },
        {
            title: "Items",
            name: "items",
            type: "array",
            of: [{
                type: "reference",
                to: [{type: "item"}]
            }]
        },
        {
            title: "Containers",
            name: "containers",
            type: "array",
            of: [{
                type: "reference",
                to: [{type: "container"}]
            }]
        },
        {
            title: "Interactive Objects",
            name: "interactiveOjbects",
            type: "array",
            of: [{
                type: "reference",
                to: [{type: "interactiveObject"}]
            }]
        },
        {
            title: "Room - Up",
            name: "roomUp",
            type: "reference",
            to: [{type: "room"}]
        },
        {
            title: "Room - Down",
            name: "roomDown",
            type: "reference",
            to: [{type: "room"}]
        },
        {
            title: "Room - North",
            name: "roomNorth",
            type: "reference",
            to: [{type: "room"}]
        },
        {
            title: "Room - East",
            name: "roomEast",
            type: "reference",
            to: [{type: "room"}]
        },
        {
            title: "Room - South",
            name: "roomSouth",
            type: "reference",
            to: [{type: "room"}]
        },
        {
            title: "Room - West",
            name: "roomWest",
            type: "reference",
            to: [{type: "room"}]
        }
    ]
}