import React, { Component } from 'react';

export const Paging = Comp => {
  return class Paging extends Component {
    state = {
      page: 1,
      allPages: 0
    }

    updatePage = page => {
      this.setState({ page });
    }

    setAllPages = allPages => {
      this.setState({ allPages });
    }

    render() {
      const { page, allPages } = this.state;
      const props = {
        ...this.props,
        page,
        setAllPages: this.setAllPages
      };
      return (
        <>
          <button disabled={page === 1} onClick={() => this.updatePage(page - 1)}>Prev</button>
          <span>{page} / {allPages}</span>
          <button disabled={page === allPages} onClick={() => this.updatePage(page + 1)}>Next</button>
          <Comp {...props} />
        </>
      );
    }
  };
};
