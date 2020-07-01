import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        term: ''
    };

    render() {

        const onInputChange = event => {
            this.setState({ term: event.target.value });
        };

        const onFormSubmit = event => {
            event.preventDefault();

            this.props.onFormSubmit(this.state.term);
        };

        return (
            <div className="search-bar ui segment">
                <form onSubmit={onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;