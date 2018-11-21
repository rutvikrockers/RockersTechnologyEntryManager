import colors from './colors';
const visit = {
  visitWrapper: {
    flex: 1,
    backgroundColor: colors.hero,
    height: 50,
    alignItems: 'center',
    margin: 20,
    marginBottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  visited: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    margin: 20,
    marginBottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.dark.background,
  },
  visitTxt: {
    fontSize: 17,
    color: colors.dark.foreground
  }
}

export default visit;
