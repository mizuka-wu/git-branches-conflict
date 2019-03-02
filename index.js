const IGNORE_PATTERNS = ['.*CHANGELOG', '.*pubspec.yaml']
const Detector = require('./lib/detector')

module.exports = function app(repository_path, branchs) {
  detector = new Detector(repository_path, IGNORE_PATTERNS)
  detector.pullAllBrachesLocaly()
  let conflicts = detector.get_merge_conflicts()
  return conflicts
}
