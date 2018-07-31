angular.module('angularfireSlackApp')
  .controller('ChannelsCtrl', ['$state', 'Auth', 'Users', 'profile', 'channels', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;
    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;

    channelsCtrl.logout = function(){
    Auth.$signOut().then(function(){
    $state.go('home');
  });
};
channelsCtrl.getDisplayName = Users.getDisplayName;

channelsCtrl.getGravatar = Users.getGravatar;

 channelsCtrl.createChannel = function(){
  channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
    $state.go('channels.messages', {channelId: ref.key});
  });
};
  channelsCtrl.users = Users.all;
  }]);