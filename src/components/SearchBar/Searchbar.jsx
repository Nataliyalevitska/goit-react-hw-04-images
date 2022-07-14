import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import s from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handelChange = e => {
    this.setState({
      query: e.currentTarget.value.toLowerCase(),
    });
  };

  handelSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    if (query.trim() === '') {
      return toast.error('Empty field. Write something!');
    }
    this.props.onSubmit(query);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <header className={s.searchBar}>
        <form className={s.searchForm} onSubmit={this.handelSubmit}>
          <button className={s.searchFormButton} type="submit">
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            type="text"
            name="query"
            value={this.state.query}
            className={s.searchFormInput}
            onChange={this.handelChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// import { Component } from "react";
// import s from "./Searchbar.module.css";
// import { toast } from "react-toastify";

// export class Searchbar extends Component {
//   state = {
//     picName: "",
//   };

//   handleChange = (ev) => {
//     this.setState({ picName: ev.target.value.toLowerCase() });
//   };

//   handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (this.state.picName.trim() === "") {
//       toast.error("enter someone");
//       return;
//     }
//     this.props.submit(this.state.picName);
//     this.setState({ picName: "" });
//   };

//   render() {
//     const { handleSubmit, handleChange } = this;
//     const { picName } = this.state;
//     return (
//       <header className={s.Searchbar}>
//         <form onSubmit={handleSubmit} className={s.SearchForm}>
//           <button type="submit" className={s.SearchFormButton}>
//             <span className={s.SearchFormButtonLabel}>Search</span>
//           </button>
//           <input
//             className={s.SearchFormInput}
//             type="text"
//             value={picName}
//             onChange={handleChange}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
// export default Searchbar;