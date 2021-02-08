import React from 'react';
import DropSelect from '../dropselect/DropSelect';
import DropselectMount from '../dropselect/DropselectMount';
import PropTypes from 'prop-types';

class UserSelectorComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = UserSelectorComponent.getInitialState();
        this.addSelectedUserHandler = this.addSelectedUserHandler.bind(this);
    }

    static getInitialState() {
        return {
            selectedUsers: [],
        };
    }

    getDropSelectProps() {
        return {
            trigger: {},
            suggestions: this.props.users,
            pickedSuggestions: this.state.selectedUsers.map((selectedUser) => {
                return selectedUser.id;
            }),
            hidePickedSuggestion: true,
            scrollTarget: document.getElementById('app-contents'),
            onSelect: this.addSelectedUserHandler,
        };
    }

    addSelectedUserHandler(selectedUser) {
        const selectedUsers = this.state.selectedUsers.slice();
        selectedUsers.push(selectedUser);
        this.setState({
            selectedUsers: selectedUsers,
        });
    }

    removeSelectedUserHandler(selectedUser) {
        const selectedUsers = this.state.selectedUsers.filter((user) => {
            return user.id !== selectedUser.id;
        });

        this.setState({
            selectedUsers: selectedUsers,
        });
    }

    renderSelectedUsers() {
        return this.state.selectedUsers.map((selectedUser) => {
            return (
                <li className="user-selector-list-item" key={selectedUser.id}>
                    <span
                        className="en-icon-delete-3"
                        onClick={() => {
                            this.removeSelectedUserHandler(selectedUser);
                        }}
                    />
                    {selectedUser.name}
                </li>
            );
        });
    }

    renderInputWithImplodedUserIds() {
        const implodedUserIds = this.state.selectedUsers
            .map((selectedUser) => {
                return selectedUser.id;
            })
            .join(',');

        return <input type="hidden" name={this.props.inputName} value={implodedUserIds} />;
    }

    render() {
        return (
            <div className="user-selector">
                <ul className="user-selector-list clearfix">
                    {this.renderSelectedUsers()}
                    <DropselectMount>
                        <li className="button secondary" key={'add-selected-user'}>
                            <span className="en-icon-add-3" /> Add User
                        </li>
                        <DropSelect {...this.getDropSelectProps()} />
                    </DropselectMount>
                </ul>
                {this.renderInputWithImplodedUserIds()}
            </div>
        );
    }
}

UserSelectorComponent.propTypes = {
    inputName: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
};

export default UserSelectorComponent;
