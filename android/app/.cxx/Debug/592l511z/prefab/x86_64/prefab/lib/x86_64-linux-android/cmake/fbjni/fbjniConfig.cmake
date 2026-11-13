if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "C:/Users/Saud/.gradle/caches/9.3.1/transforms/e8c0ade6303286d57a8d8fc0b119fc1f/workspace/transformed/fbjni-0.7.0/prefab/modules/fbjni/libs/android.x86_64/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/Saud/.gradle/caches/9.3.1/transforms/e8c0ade6303286d57a8d8fc0b119fc1f/workspace/transformed/fbjni-0.7.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

