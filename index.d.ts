/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

/** State management for the application. */
export interface ProjectState {
  project: Project
  currentFile?: string
}
/** Information about project. */
export interface Project {
  file: FileEntry
  metadata?: FileMetadata
  kclFileCount: number
  directoryCount: number
  /** The default file to open on load. */
  defaultFile: string
}
/** Information about a file or directory. */
export interface FileEntry {
  path: string
  name: string
  children?: Array<FileEntry>
}
/** Metadata about a file or directory. */
export interface FileMetadata {
  accessed?: Date
  created?: Date
  type?: FileType
  size: number
  modified?: Date
  permission?: FilePermission
}
/** The type of a file */
export const enum FileType {
  /** A file. */
  File = 'File',
  /** A directory. */
  Directory = 'Directory',
  /** A symbolic link. */
  Symlink = 'Symlink'
}
/** The permissions of a file. */
export const enum FilePermission {
  /** Read permission. */
  Read = 'Read',
  /** Write permission. */
  Write = 'Write',
  /** Execute permission. */
  Execute = 'Execute'
}
export declare function getProjectState(path: string): Promise<ProjectState>
