import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//layouts
import '../../ui/layouts/MainLayout/MainLayout';

//pages
import '../../ui/pages/Home/Home';

FlowRouter.route('/', {
    action() {
        BlazeLayout.render('MainLayout', { main: 'Home' });
    }
})
