const Git = require('nodegit')
module.exports = class {
  /**
   * @constructor
   * @param {string} repository_path - 地址
   * @param {string[]} [ignore_patterns] - 忽略的文件列表
   */
  constructor(repository_path, ignore_patterns = []) {
    console.log(repository_path)

    Git.Clone(repository_path, './tmp/' + new Date().getTime())
      .then(repo => {
        console.log(repo)
        this.repo = repo
      })
      .catch(e => {
        console.error(e)
      })
    this.ignore_patterns = ignore_patterns.map(regexp => new RegExp(regexp))
  }

  reset() {
    // this.repo.git.reset('--hard', 'HEAD')
    // this.repo.git.clean('-xdf')
  }

  /**
   * 判断是否是忽略文件
   * @param {*} filename
   */
  isIgnoredFile(filename) {
    return this.ignore_patterns.some(regexp => regexp.test(filename))
  }

  /**
   * 获取有问题的
   * @param {*} branch1
   * @param {*} branch2
   */
  getConflictedFiles(branch1, branch2) {
    let conflicts = []
    // unmerged_blobs = self._repo.index.unmerged_blobs()
    // console.log("Detect conflicts in files:")
    // for path in unmerged_blobs:
    //     if not self._isIgnoredFile(path):
    //         logging.info("\t\t\t'{0}'".format(path))
    //         conflicts.append(path)
    //         #print(dir(unmerged_blobs[path][0]))
    //     else:
    //         logging.info("\t\t\t'{0}' - ignored".format(path))

    // return conflicts
  }

  pullAllBrachesLocaly(self) {
    // #   self._repo.git.remote.prune("origin")
    // logging.info("Fetching branches ....")
    // self._repo.git.fetch('--all')
    // for r in self._repo.remotes:
    //     for b1 in r.refs:
    //         tracking = ""
    //         try:
    //                 self._repo.git.checkout(b1, "-t")
    //                 tracking = " - fetched"
    //         except GitCommandError as e:
    //                 if e.status != 128:
    //                         raise
    //                 else:
    //                         tracking = " - already tracked"
    //         logging.info("\t'{0}'{1}".format(b1.name, tracking))
    // return None
  }
  get_merge_conflicts(self) {
    // conflicts={}
    // for b1 in self._repo.branches:
    //     logging.info("Checkout '{0}'".format(b1.name))
    //     self._reset()
    //     self._repo.git.checkout(b1)
    //     for b2 in reversed(self._repo.branches):
    //             if b1==b2:
    //                     break
    //             try:
    //                     logging.info("\tMerging with '{0}'".format(b2.name))
    //                     self._reset()
    //                     res = self._repo.git.merge(b2)
    //             except GitCommandError as e:
    //                     if e.status == 1:
    //                         conflicted_files = self._getConflictedFiles(b1, b2)
    //                         if conflicted_files:
    //                             conflicts.setdefault(b1.name, []).append(Conflict(b2.name, b1.name, conflicted_files) )
    //                             conflicts.setdefault(b2.name, []).append(Conflict(b1.name, b2.name, conflicted_files))
    // self._reset()
    // return conflicts
  }
}
