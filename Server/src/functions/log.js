import {List, Map, Set} from 'immutable';


export function loginSource(stateSources, name, sid, names) {
    if (!names.has(name)) {
        return stateSources.set('name', name);

    } else {

        return loginSource(stateSources, name+'_', sid, names);

    }
}

export function logoutSource(state, sid) {

    return state.update('sources', sources => sources.delete(sid))
                .update('names', 
                    names => names.delete(state.getIn(['sources', sid, 'name'])));

}