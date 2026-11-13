if(NOT TARGET hermes-engine::hermesvm)
add_library(hermes-engine::hermesvm SHARED IMPORTED)
set_target_properties(hermes-engine::hermesvm PROPERTIES
    IMPORTED_LOCATION "C:/Users/Saud/.gradle/caches/9.3.1/transforms/c417c58d15be2b270d55538e4004d6cd/workspace/transformed/hermes-android-250829098.0.16-debug/prefab/modules/hermesvm/libs/android.x86/libhermesvm.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/Saud/.gradle/caches/9.3.1/transforms/c417c58d15be2b270d55538e4004d6cd/workspace/transformed/hermes-android-250829098.0.16-debug/prefab/modules/hermesvm/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

