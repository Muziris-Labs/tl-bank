"use client";

import { Checkbox } from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";

import {
  addSelectedContributor,
  removeSelectedContributor,
} from "@/redux/slice/selectedSlice";

const ContributorCheckbox = ({
  contributor,
  text,
  setText,
  isEditing,
  handleDoubleClick,
  handleBlur,
}) => {
  const dispatch = useDispatch();

  const selectedContributors = useSelector(
    (state) => state.selected.selectedContributors,
  );

  return (
    <div className="w-1/3">
      <Checkbox
        color="purple"
        checked={selectedContributors.some(
          (selectedContributor) => selectedContributor === contributor.pubkey,
        )}
        onChange={() => {
          if (
            selectedContributors.some(
              (selectedContributor) =>
                selectedContributor === contributor.pubkey,
            )
          ) {
            dispatch(removeSelectedContributor(contributor.pubkey));
          } else {
            dispatch(addSelectedContributor(contributor.pubkey));
          }
        }}
        label={
          <div className="ml-3 flex items-center font-grotesque">
            <div onDoubleClick={handleDoubleClick}>
              {isEditing ? (
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onBlur={handleBlur}
                  className="border-b border-white bg-transparent text-white/90 outline-none"
                />
              ) : (
                <p className="text-white/90">{contributor.name}</p>
              )}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ContributorCheckbox;
