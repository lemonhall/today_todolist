#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{Manager, Window, AppHandle};

// 之前手动居中的代码可以注释掉或删除，因为插件会处理位置恢复
// fn center_window(window: &Window) {
//     if let Some(monitor) = window.current_monitor().unwrap() {
//         let monitor_size = monitor.size();
//         let window_size = window.outer_size().unwrap();
//         let new_pos_x = (monitor_size.width as i32 - window_size.width as i32) / 2;
//         let new_pos_y = (monitor_size.height as i32 - window_size.height as i32) / 2;
//         window.set_position(tauri::PhysicalPosition::new(new_pos_x, new_pos_y)).unwrap();
//     }
// }

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_window_state::Builder::default().build())
        // 如果不再需要手动居中，setup部分可以移除或保持为空
        // .setup(|app| {
        //     let window = app.get_window("main").unwrap();
        //     // center_window(&window); // 不再需要手动居中
        //     Ok(())
        // })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
} 