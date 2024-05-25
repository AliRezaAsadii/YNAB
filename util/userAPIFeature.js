class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString; // Fixed variable name
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    }

    return this;
  }
}

module.exports = APIFeatures;
