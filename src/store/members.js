import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// need id for each team member
let lastId = 0;

const slice = createSlice({
  name: "members",
  initialState: [],
  reducers: {
    memberAdded: (members, action) => {
      members.push({
        id: lastId++,
        name: action.payload.name,
        bugs: [],
      });
    },
    assignBug: (members, action) => {
      const index = members.findIndex(
        (member) => member.name === action.payload.name
      );
      members[index].bugs = [...members[index].bugs, action.payload.bug];
    },
  },
});

export const { memberAdded, assignBug } = slice.actions;
export default slice.reducer;

//memoized selector
export const getAssignedBugs = createSelector(
  (state) => state.entities.members,
  (members) => members.filter((member) => member.name === state.name).bugs
);
