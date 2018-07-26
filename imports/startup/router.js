import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../ui/layouts/MainLayout';
import CreatePages from '../ui/components/CreatePages';

FlowRouter.route('/crear', {
	name: 'createPages',
	action(){
		mount(MainLayout, {content: <CreatePages />});
	}
});
