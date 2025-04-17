import { Field, Label } from "@/components/Field";
import { Button } from "@/components/Buttons/Button";
import { Svg } from "@/components/Optimizing/Svg";
import PropTypes from "prop-types";

const filters = [
  { key: "all-time", label: "All Time" },
  { key: "last-hour", label: "Last Hour" },
  { key: "last-day", label: "Last Day" },
  { key: "last-7-days", label: "Last 7 Days" },
  { key: "last-30-days", label: "Last 30 Days" },
];

export function FilterBar({
  filterMessage,
  setFilterMessage,
  searchQuery,
  setSearchQuery,
  open,
}) {
  const handleFilterChange = (event) => {
    setFilterMessage(event.target.value);
  };

  const handleSearchChange = (
    event
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col justify-stretch gap-4 w-full">
      <div className="flex flex-col justify-center items-stretch gap-x-3.5 gap-y-3 w-full lg:flex-row">
        <Button onClick={open} aria-label="Create new message" className="shrink-0 px-3 py-2">
          <Svg
            width={18}
            height={18}
            draw={[
              "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
            ]}
          />
          Send message
        </Button>

        <div>
          <Label htmlFor="searching" className="sr-only" text="Search by users" />
          <div className="grid grid-cols-1">
            <Field
              id="searching"
              name="searching"
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="e.g. john doe"
              maxLength={125}
              className="col-start-1 row-start-1 font-medium py-2 pr-3 pl-10 rounded-md"
            />
            <Svg
              width={16}
              height={16}
              draw={[
                "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",
              ]}
              className="col-start-1 row-start-1 ml-3.5 self-center"
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="category"
            className="sr-only"
            text="Message Category"
          />
          <div className="grid grid-cols-1">
            <select
              id="category"
              name="category"
              value={filterMessage}
              onChange={handleFilterChange}
              className="col-start-1 row-start-1 font-medium appearance-none py-2 pl-4 pr-8 block w-full bg-white text-sm/6 text-gray-700 rounded-md outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600"
            >
              {filters.map((filter) => (
                <option key={filter.key} value={filter.key}>
                  {filter.label}
                </option>
              ))}
            </select>
            <Svg
              variant="outline"
              width={14}
              height={14}
              draw={["m19.5 8.25-7.5 7.5-7.5-7.5"]}
              className="col-start-1 row-start-1 mr-2 self-center justify-self-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  filterMessage: PropTypes.oneOf(filters.map(filter => filter.key)).isRequired,
  setFilterMessage: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired
}
