
const Data = {
    user_info:  {
        user1: ["list1", "list2", "list3"],
        user2: ["list2", "list3", "list4", "list5"],
        user3: ["list3", "list5"]
    },

    list_info: {
        list1: [
            {id: 1, text: "todo11", taken: false},
            {id: 2, text: "todo12", taken: false},
            {id: 3, text: "todo13", taken: false}
        ],
        list2: [
            {id: 1, text: "todo21", taken: false},
            {id: 2, text: "todo22", taken: false},
            {id: 3, text: "todo23", taken: true},
            {id: 4, text: "todo24", taken: true}
        ],
        list3: [
            {id: 1, text: "todo31", taken: false},
            {id: 2, text: "todo32", taken: true},
            {id: 3, text: "todo33", taken: true}
        ],
        list4: [
            {id: 1, text: "todo41", taken: true},
            {id: 2, text: "todo42", taken: false},
            {id: 3, text: "todo43", taken: true}
        ],
        list5: [
            {id: 1, text: "todo51", taken: false},
            {id: 2, text: "todo52", taken: false},
            {id: 3, text: "todo53", taken: true},
            {id: 4, text: "todo54", taken: false},
            {id: 5, text: "todo55", taken: true},
            {id: 6, text: "todo56", taken: true},
            {id: 7, text: "todo57", taken: true},
            {id: 8, text: "todo58", taken: true}
        ]
    }
}

export default Data;

