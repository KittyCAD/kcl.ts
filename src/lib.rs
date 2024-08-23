#![deny(clippy::all)]

use kcl_lib::settings::types::file::ProjectState;

#[macro_use]
extern crate napi_derive;

#[napi]
pub async fn get_project_state(path: String) -> Result<ProjectState, napi::Error> {
  ProjectState::new_from_path(std::path::Path::new(&path).to_path_buf())
    .await
    .map_err(|e| e.into())
}
