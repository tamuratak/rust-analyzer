initSidebarItems({"constant":[["DEFAULT_LRU_CAP",""]],"enum":[["CrateOrigin","Origin of the crates. It is used in emitting monikers."],["Edition",""],["ProcMacroExpansionError",""],["ProcMacroKind",""]],"macro":[["impl_intern_key",""]],"mod":[["fixture","A set of high-level utility fixture methods to use in tests."]],"struct":[["AnchoredPath","Path relative to a file."],["AnchoredPathBuf","Path relative to a file."],["Cancelled","A panic payload indicating that a salsa revision was cancelled."],["Change","Encapsulate a bunch of raw `.set` calls on the database."],["CrateData",""],["CrateDisplayName",""],["CrateGraph","`CrateGraph` is a bit of information which turns a set of text files into a number of Rust crates."],["CrateGraphQuery",""],["CrateId",""],["CrateName",""],["Dependency",""],["Env",""],["FileId","Handle to a file in [`Vfs`]"],["FileLoaderDelegate","Silly workaround for cyclic deps between the traits"],["FilePosition",""],["FileRange",""],["FileSet","A set of [`VfsPath`]s identified by [`FileId`]s."],["FileSourceRootQuery",""],["FileTextQuery",""],["ParseQuery",""],["ProcMacro",""],["ProcMacroId",""],["SourceDatabaseExtGroupStorage__",""],["SourceDatabaseExtStorage","Representative struct for the query group."],["SourceDatabaseGroupStorage__",""],["SourceDatabaseStorage","Representative struct for the query group."],["SourceRoot",""],["SourceRootCratesQuery",""],["SourceRootId","Files are grouped into source roots. A source root is a directory on the file systems which is watched for changes. Typically it corresponds to a Rust crate. Source roots might be nested: in this case, a file belongs to the nearest enclosing source root. Paths to files are always relative to a source root, and the analyzer does not know the root path of the source root at all. So, a file from one source root can’t refer to a file in another source root by path."],["SourceRootQuery",""],["VfsPath","Path in `Vfs`."]],"trait":[["FileLoader",""],["ProcMacroExpander",""],["SourceDatabase","Database which stores all significant input facts: source code and project model. Everything else in rust-analyzer is derived from these queries."],["SourceDatabaseExt","We don’t want to give HIR knowledge of source roots, hence we extract these methods into a separate DB."],["Upcast",""]]});