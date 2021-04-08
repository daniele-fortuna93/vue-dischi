var app = new Vue(
  {
    el: '#root',
    data:{
      albums: [],
      generi: [],
      selectGenere:''
    },
    mounted: function () {
      let self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then(function (response) {
          self.albums = response.data.response;
          self.albums.sort(function (a, b) {
            return a.year - b.year;
          });
          for (var i = 0; i < self.albums.length; i++) {
            if ( !self.generi.includes(self.albums[i].genre)){
              self.generi.push(self.albums[i].genre);
            }
          }
      });
    }
  }
);
