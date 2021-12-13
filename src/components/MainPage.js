import React, {useState} from "react";

const ItemSearch = ({handle}) => {
  // console.log("props", props);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) =>{
    setSearchTerm(e.target.value)
  }

  const handleSearchButton = () =>{
    handle(searchTerm)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div class="input-group mt-3">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange ={handleChange}
              />
              <button type="button" class="btn btn-outline-primary" onClick={handleSearchButton}>
                search
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default ItemSearch;
