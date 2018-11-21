import { mapStateToProps } from '../../views/home';

describe('Home Component', () => {
    describe('Container Element', () => {
        describe('mapStateToProps', () => {
            it('should map the state to props correctly', () => {
                
                const appState = {
                  user: 'testUser', 
                  feed: {
                    allVideos: "testVideos"
                  },video: {
                    nowPlaying: 0,
                    isPlaying: true
                  }
                };
                const ownProps = {};
                const componentState = mapStateToProps(appState, ownProps);
               
            })
        })
    })
    it('Should not regress', () => {

    })
});
